/* General Body Styling */
body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #FF8C42;
    color: white;
}

/* Header Styling */
header {
    background-color: #333;
    color: white;
    padding: 15px 20px;
    text-align: center;
}

header h1 {
    font-size: 1.8rem;
    margin: 0;
}

/* Main Content Styling */
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    gap: 20px;
}

/* Broadcast Buttons Styling */
.broadcast-buttons {
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
}

.broadcast-buttons button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #444;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.broadcast-buttons button:hover {
    background-color: #666;
}

/* Broadcast Name Styling */
#broadcast-name {
    font-size: 1.4rem;
    text-align: center;
}

/* Iframe Styling */
#video-player {
    width: 60%; /* Biraz daha küçültüldü */
    max-width: 1200px; /* Maksimum genişlik */
    aspect-ratio: 16/9; /* 16:9 oranı */
    display: block;
    border: 2px solid #ccc;
    overflow: hidden; /* Taşmayı gizler */
    height: calc(100% - 10px); /* Yüksekliği sınırlar */
}

/* Warning Message Styling */
.warning-message {
    font-size: 1rem;
    color: #ffcc00;
    text-align: center;
}

/* Footer Styling */
footer {
    text-align: center;
    margin-top: 20px;
    color: white;
    font-size: 1rem;
}
