const getJoke = async () => {
            const res = await fetch('https://api.chucknorris.io/jokes/random')
            const random_joke = await res.json()
            alert(random_joke.value);
            document.querySelector('p#joke-text').innerText = random_joke.value
            // document.querySelector('small').style.display = 'none'
            document.getElementById('s_text').innerText = random_joke.value;
            document.getElementById('s_text').style.display = 'none';
        }