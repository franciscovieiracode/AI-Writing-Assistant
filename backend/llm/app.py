from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# Optional: make sure OPTIONS requests are handled
@app.before_request
def before_request_func():
    if request.method == 'OPTIONS':
        resp = app.make_default_options_response()
        headers = resp.headers

        headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
        headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
        headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
        return resp

# Gemini API configuration
GEMINI_API_KEY = os.getenv('GEMINI_API_KEY')
# Using a valid model that supports generateContent
GEMINI_MODEL = "gemini-2.5-flash"
GEMINI_API_URL = f"https://generativelanguage.googleapis.com/v1beta/models/{GEMINI_MODEL}:generateContent?key={GEMINI_API_KEY}"

# Style prompts
STYLE_PROMPTS = {
    'professional': """Rewrite the following text in a professional, formal tone. 
Use proper business language, maintain clarity, and ensure it sounds polished and corporate.

Text: {text}

Rewritten text:""",
    
    'casual': """Rewrite the following text in a casual, friendly tone. 
Make it conversational and relaxed, like you're talking to a friend.

Text: {text}

Rewritten text:""",
    
    'concise': """Rewrite the following text to be as concise as possible. 
Remove unnecessary words while keeping the core message clear and direct.

Text: {text}

Rewritten text:""",
    
    'creative': """Rewrite the following text in a creative, engaging way. 
Use vivid language, interesting metaphors, and make it captivating to read.

Text: {text}

Rewritten text:"""
}

@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({'status': 'healthy', 'service': 'LLM Service'}), 200

@app.route('/api/rewrite', methods=['POST'])
def rewrite_text():
    """Rewrite text using AI with specified style"""
    try:
        data = request.get_json()
        
        # Validate input
        if not data or 'text' not in data or 'style' not in data:
            return jsonify({'error': 'Missing required fields: text and style'}), 400
        
        text = data['text']
        style = data['style'].lower()
        
        # Validate style
        if style not in STYLE_PROMPTS:
            return jsonify({'error': f'Invalid style. Choose from: {list(STYLE_PROMPTS.keys())}'}), 400
        
        # Check text length
        if len(text) > 10000:
            return jsonify({'error': 'Text too long. Maximum 10,000 characters.'}), 400
        
        if len(text.strip()) == 0:
            return jsonify({'error': 'Text cannot be empty'}), 400
        
        # Generate prompt
        prompt = STYLE_PROMPTS[style].format(text=text)
        
        # Call Gemini API using REST
        payload = {
            "contents": [{"parts": [{"text": prompt}]}],
            "generationConfig": {
                "temperature": 0.7,
                "maxOutputTokens": 2048
            }
        }
        
        response = requests.post(GEMINI_API_URL, json=payload)
        
        if response.status_code != 200:
            raise Exception(f"Gemini API error: {response.text}")
        
        result = response.json()
        # Extract rewritten text safely
        rewritten_text = result['candidates'][0]['content']['parts'][0]['text']
        
        return jsonify({
            'originalText': text,
            'rewrittenText': rewritten_text,
            'style': style,
            'success': True
        }), 200
        
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({
            'error': 'Failed to rewrite text',
            'details': str(e),
            'success': False
        }), 500

@app.route('/api/styles', methods=['GET'])
def get_styles():
    """Get available writing styles"""
    return jsonify({
        'styles': list(STYLE_PROMPTS.keys()),
        'success': True
    }), 200

if __name__ == '__main__':
    # Check if API key is set
    if not GEMINI_API_KEY:
        print("WARNING: GEMINI_API_KEY not found in environment variables!")
        print("Please create a .env file with your Gemini API key")
        print("Get your free API key at: https://aistudio.google.com/app/apikey")
    else:
        print("✅ Gemini API key found!")
        print("🚀 Starting Flask server on http://localhost:5000")
    
    app.run(debug=True, host='0.0.0.0', port=5000)
