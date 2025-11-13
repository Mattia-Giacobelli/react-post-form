import { useState } from "react"



export default function Main() {

    const [formData, setFormData] = useState({
        "title": '',
        "author": '',
        "body": '',
        "public": false
    })

    function handleSubmit(e) {

    }




    return (

        <main>
            <div className="container">
                <form >
                    <div class="mb-3">
                        <label for="author" class="form-label">Author</label>
                        <input
                            name="author"
                            value={formData.author}
                            onChange={e => setFormData({ ...formData, author: e.target.value })}
                            type="text" class="form-control"
                            id="author" placeholder="Author name" />
                    </div>
                    <div class="mb-3">
                        <label for="title" class="form-label">Author</label>
                        <input
                            name="title"
                            value={formData.title}
                            onChange={e => setFormData({ ...formData, title: e.target.value })}
                            type="text" class="form-control"
                            id="title" placeholder="Title" />
                    </div>
                    <div class="mb-3">
                        <label for="body" class="form-label">Article text</label>
                        <textarea
                            name="body"
                            value={formData.body}
                            onChange={e => setFormData({ ...formData, body: e.target.value })}
                            class="form-control" id="body"
                            rows="3"></textarea>
                    </div>
                    <div class="form-check">
                        <input
                            name="public"
                            checked={formData.public}
                            onChange={e => setFormData({ ...formData, public: e.target.checked })}
                            class="form-check-input" type="checkbox"
                            id="public" />
                        <label class="form-check-label" htmlFor="public">
                            Public
                        </label>
                    </div>
                </form>
            </div>

        </main>

    )
}