const canvas = document.getElementById('signatureCanvas');
    const ctx = canvas.getContext('2d');
    let isDrawing = false;

    // Set canvas size
    canvas.width = 250;  // Match canvas HTML width
    canvas.height = 93;  // Match canvas HTML height

    // Start drawing
    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
    });

    // Draw on canvas
    canvas.addEventListener('mousemove', (e) => {
        if (isDrawing) {
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.strokeStyle = "#000"; // Set line color
            ctx.lineWidth = 2; // Set line width
            ctx.stroke();
        }
    });

    // Stop drawing
    canvas.addEventListener('mouseup', () => {
        isDrawing = false;
        ctx.closePath();
    });

    // Clear canvas
    document.getElementById('clearButton').addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    // For touch devices
    canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        isDrawing = true;
        ctx.beginPath();
        ctx.moveTo(touch.clientX - canvas.offsetLeft, touch.clientY - canvas.offsetTop);
    });

    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        if (isDrawing) {
            const touch = e.touches[0];
            ctx.lineTo(touch.clientX - canvas.offsetLeft, touch.clientY - canvas.offsetTop);
            ctx.stroke();
        }
    });

    canvas.addEventListener('touchend', () => {
        isDrawing = false;
        ctx.closePath();
    });


    function toggleSelect(element) {
        // Toggle selected style by adding/removing a class
        const indicator = element.querySelector('span');
        indicator.classList.toggle('bg-[#1C93C5]');
    }

    function addTableRow() {
        // Select the table body and the last row
        const tableBody = document.getElementById('table-body');
        const lastRow = tableBody.querySelector('tr:last-child');
    
        // Clone the last row
        const newRow = lastRow.cloneNode(true);
    
        // Clear input values in the new row
        newRow.querySelectorAll('input').forEach(input => {
            input.value = ''; // Reset input values for the cloned row
        });
    
        // Append the cloned row to the table body
        tableBody.appendChild(newRow);
    
        // Add delete functionality to the new row's delete button
        newRow.querySelector('.delete-row').addEventListener('click', () => newRow.remove());
    }
    

    const documents = [
        {
            title: "Personalausweis (Vorder- und Rückseite)",
            status: "uploaded",
            fileName: "Personalausweis-Scann-2024-vs-rs1.pdf"
        },
        {
            title: "KV-Karte (Vorder- und Rückseite) o. Bescheinigung einer PKV",
            status: "uploaded",
            fileName: "KV-Karte-Vorder-und-Rückseite.pdf"
        },
        {
            title: "Sozialversicherungsnachweis",
            status: "uploaded",
            fileName: "saozialversicherungsnachweis.pdf"
        },
        {
            title: "VWL-Vertrag (falls vorhanden)",
            status: "pending",
            fileName: ""
        },
        {
            title: "Nachweis Elterneigenschaft",
            status: "pending",
            fileName: ""
        },
        // Add more documents as needed
    ];

    // Function to generate document HTML
    function generateDocumentHTML(document, index) {
        return `
            <div class="flex border-2 p-4 border-[#C4C8CE] w-full justify-between mb-4">
                <div class="text-textprimary">
                    <h4 class="font-bold mb-2 text-base">${document.title}</h4>
                    ${document.status === "uploaded" ? `
                        <div class="text-xs flex items-center gap-3">
                            <i class="fa-solid fa-check flex items-center rounded-sm justify-center h-4 w-4 bg-[#55AA00] text-white"></i>
                            <p>${document.fileName}</p>
                        </div>` : `<p class="text-xs">Datei (PDF, JPG, PNG), max. 2MB*</p>`}
                </div>
                <button class="bg-${document.status === "uploaded" ? "[#C7C7C7]" : "[#1C93C5]"} text-[#f5f4f5] px-3 text-sm">
                    <i class="fa-solid ${document.status === "uploaded" ? "fa-trash" : "fa-file"}"></i>
                    ${document.status === "uploaded" ? "Datei entfernen" : "Datei hinzufügen"}
                </button>
            </div>
        `;
    }
    // Initial delete functionality for the existing row
    document.querySelectorAll('.delete-row').forEach(button => {
        button.addEventListener('click', function() {
            this.closest('tr').remove();
        });
    });

     // Get the container element
     const documentList = document.getElementById("document-list");

     // Generate and insert HTML
     documents.forEach((doc, index) => {
         documentList.innerHTML += generateDocumentHTML(doc, index);
     });