#!/usr/bin/env python3
from http.server import HTTPServer, SimpleHTTPRequestHandler
import ssl

PORT = 8000

class MyHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=".", **kwargs)

print(f"Serving on http://localhost:{PORT}")
print("Press Ctrl+C to stop the server")

httpd = HTTPServer(("0.0.0.0", PORT), MyHandler)

try:
    httpd.serve_forever()
except KeyboardInterrupt:
    print("\nServer stopped")