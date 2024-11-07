const memes = [
    ['https://claudia.abril.com.br/wp-content/uploads/2020/01/memes-famosos-da-internet-origem_131.png?quality=70&w=720&crop=1', 'Como você é burro'],
    ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaSwYsZxRYM1DTlxxiJ9CF25edZ5QCnmKCfQ&s', 'Nazaré'],
    ['https://s2-g1.glbimg.com/Dh9fypZfgFQNjiOtvL3JSkn9TJs=/0x0:620x465/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/G/n/exFHZbQhSfEAJKj1AQxQ/gravida.jpg', 'Gravida de Taubaté']
];

console.log("ola mundo")

const tbody = document.querySelector('#memes-container')


memes.forEach(meme => {

const linhaTabela = ` 

    <tr>
        <td>${meme[1]}</td>  
       <td>
            <img src="${meme[0]}">
        </td>
    </tr>
`

   
    
    tbody.innerHTML += linhaTabela
 
}
)


 
