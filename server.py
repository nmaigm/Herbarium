import os
import json
from http.server import SimpleHTTPRequestHandler, HTTPServer

class MyHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/list-pages":
            pages_dir = os.path.join(os.getcwd(), "sources")
            pages = [os.path.splitext(f)[0] for f in os.listdir(pages_dir) if f.endswith(".html")]
            self.send_response(200)
            self.send_header("Content-type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps(pages).encode())
        else:
            super().do_GET()

if __name__ == "__main__":
    server = HTTPServer(("localhost", 8000), MyHandler)
    print("Serving on http://localhost:8000")
    server.serve_forever()
