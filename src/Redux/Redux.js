import reRender from "../rerender";


let state = {
    accountPage: [{name: 'Rex', id: '1'},
        {name: 'Don', id: '2'},
        {name: 'Rick', id: '3'}],
    profilePage: {posts: [{like: '0', post: 'sdsadas'}],
    newPostText: 'ewe'}
}

export let addNewPost = () => {
    let newPost = {like: '0', post: state.profilePage.newPostText}
    state.profilePage.post.push(newPost)
    reRender(state)
}

export let updateNewPost = (newText) => {
    state.profilePage.newText = newText
    reRender(state)
}

export default state