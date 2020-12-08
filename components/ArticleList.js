

function articleList({posts}) {
    return (
        <div>
            <ul>
                {[posts.map((posts) => (
                    <li>{posts.title }</li>
                ))]}
            </ul>
        </div>
    );
}

export  async function getStaticProps() {
    const res = await fetch ()
    const posts = await res.json()

    return {
        props: {
            posts,
        },
    }
}

export default articleList;