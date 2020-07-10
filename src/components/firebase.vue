The core Firebase JS SDK is always required and must be listed first
    <script src="https://www.gstatic.com/firebasejs/7.14.5/firebase-app.js"></script>

    <!-- TODO: Add SDKs for Firebase products that you want to use
        https://firebase.google.com/docs/web/setup#available-libraries -->
    <script src="https://www.gstatic.com/firebasejs/7.14.5/firebase-analytics.js"></script>

    <script>
        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyBGAfSv7j5jNxQyTzFH8DoaJNvlDz4R7Ys",
            authDomain: "dee-tes.firebaseapp.com",
            databaseURL: "https://dee-tes.firebaseio.com",
            projectId: "dee-tes",
            storageBucket: "dee-tes.appspot.com",
            messagingSenderId: "495952267957",
            appId: "1:495952267957:web:b408bb979d622e19418cfc",
            measurementId: "G-7YVE0WZDX8"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
    </script>