const user = {
    id : 1,
    name : "Alex",
    password : "pw",
    email : "test@test.test",
    isAuthorised : true
}

const publication = {
    id : 1,
    picture : "pic.jpg",
    author : user.id, // берется id юзера, которму пренадлежит пост
    date : "22-03-2022",
    isLiked : false
}

const comment = {
    id : 1,
    commentText : "",
    date : "22-03-2022",
    author : user.id,
    publication : publication.id
}

const publications = []

function addPublication(identity, pic, user, dt){
    const p = {
        id: identity,
        picture: pic,
        author: user,
        date : dt
    }
    publications.push(p)
}

function changeAuthorization(user){
    !user.isAuthorised
}

function getLike(id){
    let p
    for(let i; i < publications.length; ++i){
        p = publications[i].id(id)
    }
    !p.isLiked
}

