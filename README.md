# SaberIP.es - Your Public IP Address

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/alexprovencio/saberipes)
[![License](https://img.shields.io/badge/License-MIT-green)](https://opensource.org/licenses/MIT)

A simple, responsive, and lightweight webpage that displays the user's public IP address.

**📧 Contact:** [conexionsin@gmail.com](mailto:conexionsin@gmail.com)

**🌐 Website:** [https://saberip.es](https://saberip.es)

**💻 Source Code:** [https://github.com/alexprovencio/saberipes](https://github.com/alexprovencio/saberipes)

---

## Features

- **Modern Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Spanish Interface**: Fully translated to Spanish
- **Easy Copy**: Click the IP or button to copy to clipboard
- **Visual Feedback**: Toast notification when IP is copied
- **Lightweight**: Fast loading with no external dependencies
- **Visually Appealing**: Smooth gradients and subtle animations
- **Custom Favicon**: Browser icon with SaberIP.es branding
- **Enhanced Security**:
  - Visual warning if not using HTTPS
  - Security headers in meta tags
  - Content Security Policy for protection
- **HTTPS Required**: Clear warning when page is not served via HTTPS

---

## Project Structure

- `index.html`: Main webpage with integrated HTML, CSS, and JavaScript
- `LICENSE`: MIT License file
- `README.md`: Complete documentation

---

## How to Use

### For Local Development:

1. Clone this repository or download the files
2. Navigate to the project directory
3. Start a local server:
   ```bash
   python3 -m http.server 8000
   ```
4. Open your browser at: http://localhost:8000

### To Test Copy Functionality:

1. Click on:
   - The displayed IP address (when it appears)
   - The "Copiar IP" button
2. You should see:
   - The button changes to "✓ ¡Copiado!" for 2 seconds
   - A black toast notification appears at the bottom
   - The IP address copied to your clipboard (paste to verify)
3. You can paste the IP in any text field to verify it was copied

**Note:** Some browsers may require the page to be served via HTTPS for the clipboard API to work properly.

---

## Security

The page includes several security measures:

- **HTTPS Detection**: Shows visual warning if page is not served via HTTPS
- **Content Security Policy**: Restricts script, style, and connection sources to prevent attacks
- **Security Headers**: Includes headers like X-Content-Type-Options, X-Frame-Options, and Referrer-Policy
- **Privacy**: No user data is stored, IP is only shown to the current user

---

## Notes

- The page uses the free ipify.org API to get the public IP address
- No user data is stored
- Designed to be fast and accessible
- **Important**: For production, make sure to serve the page via HTTPS

## Production Requirements

1. Set up HTTPS with a valid SSL certificate
2. Configure the domain saberip.es to point to your server
3. Ensure all resources are loaded via HTTPS
4. Consider adding additional security headers on your web server

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Credits

**Developed with the help of Mistral Vibe** 🤖✨

This project was created by [Alex Provencio](https://github.com/alexprovencio) for [SaberIP.es](https://saberip.es) with assistance from [Mistral Vibe](https://mistral.ai) - an advanced CLI coding agent.

📧 **Contact:** [conexionsin@gmail.com](mailto:conexionsin@gmail.com)

🌟 **Like this project?** Give it a star on GitHub! [⭐ Star on GitHub](https://github.com/alexprovencio/saberipes)

### Technologies Used

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **API:** [ipify.org](https://api.ipify.org) for getting public IP addresses
- **Design:** CSS gradients, smooth animations, responsive design
- **Security:** Content Security Policy, security headers
- **Development:** Assisted by Mistral Vibe (AI coding agent)

### Acknowledgments

- To [Mistral AI](https://mistral.ai) for providing the artificial intelligence technology
- To [ipify](https://www.ipify.org/) for their free public IP API
- To the open source community for tools and resources

---

## Hosted on GitHub

🔗 [https://github.com/alexprovencio/saberipes](https://github.com/alexprovencio/saberipes)

This project is hosted on GitHub. You can:
- 🐛 Report issues
- 📝 Suggest improvements
- 🍴 Fork and contribute
- ⭐ Give it a star if you like it

Contributions are welcome! 🚀