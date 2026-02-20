document.addEventListener('DOMContentLoaded', function() {
    const ipDisplay = document.getElementById('ip-display');
    const copyBtn = document.getElementById('copy-btn');
    let currentIP = '';
    
    
    // Function to get IP address
    function getIP() {
        // Try multiple methods to get the IP
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                currentIP = data.ip;
                ipDisplay.textContent = currentIP;
                ipDisplay.className = 'ip-address';
                copyBtn.classList.add('visible');
                
                // Set up copy functionality
                setupCopyListeners();
            })
            .catch(error => {
                console.error('Error fetching IP:', error);
                ipDisplay.textContent = 'No se pudo obtener la IP';
                ipDisplay.className = 'loading';
            });
    }
    
    function setupCopyListeners() {
        if (copyBtn.dataset.listenerAttached === 'true') {
            return;
        }

        ipDisplay.addEventListener('click', function() {
            if (!currentIP) {
                return;
            }
            copyToClipboard(currentIP);
        });
        
        copyBtn.addEventListener('click', function() {
            if (!currentIP) {
                return;
            }
            copyToClipboard(currentIP);
        });

        copyBtn.dataset.listenerAttached = 'true';
    }

    function copyToClipboard(text) {
        // Try modern clipboard API first
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function() {
                showCopyFeedback();
            }).catch(function(err) {
                console.error('Error with clipboard API:', err);
                copyWithFallback(text);
            });
        } else {
            copyWithFallback(text);
        }
    }

    function copyWithFallback(text) {
        const tempInput = document.createElement('textarea');
        tempInput.value = text;
        tempInput.setAttribute('readonly', '');
        tempInput.style.position = 'absolute';
        tempInput.style.left = '-9999px';
        document.body.appendChild(tempInput);
        tempInput.select();

        try {
            document.execCommand('copy');
        } catch (err) {
            console.error('Fallback copy failed:', err);
        }

        document.body.removeChild(tempInput);
        showCopyFeedback();
    }



    function showCopyFeedback() {
        // Show feedback on button
        const originalBtnText = copyBtn.textContent;
        copyBtn.textContent = '✓ ¡Copiado!';
        ipDisplay.classList.add('copied-scale');
        
        // Create toast notification
        const hint = document.createElement('div');
        hint.textContent = 'IP copiada al portapapeles';
        hint.className = 'toast-notification';
        
        document.body.appendChild(hint);
        
        // Animate toast in
        setTimeout(() => {
            hint.classList.add('show');
        }, 10);
        
        // Remove toast and reset button after delay
        setTimeout(() => {
            hint.classList.remove('show');
            hint.classList.add('hide');
            setTimeout(() => {
                document.body.removeChild(hint);
            }, 300);
            
            copyBtn.textContent = originalBtnText;
            ipDisplay.classList.remove('copied-scale');
        }, 2000);
    }

    getIP();
    

});