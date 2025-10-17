from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

print("🚀 IBM Granite Server Ready...")

@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        user_message = data.get('message', '')
        system_instruction = data.get('systemInstruction', 'You are a helpful financial assistant.')
        
        print(f"📨 Received: {user_message}")
        
        response_text = f"Hello! I'm IBM Granite. You asked: '{user_message}'. How can I help with your finances?"
        
        return jsonify({
            'success': True,
            'response': response_text
        })
        
    except Exception as e:
        print(f"❌ Error: {e}")
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy", "message": "IBM Granite server is running"})

if __name__ == '__main__':
    print("🌐 Server: http://localhost:5001")
    print("📍 Press Ctrl+C to stop")
    app.run(host='0.0.0.0', port=5001, debug=True)