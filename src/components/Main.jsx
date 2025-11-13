import { useState } from "react"
import axios from "axios"



export default function Main() {

    const endpoint = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts'

    const [formData, setFormData] = useState({
        "title": '',
        "author": '',
        "body": '',
        "public": false
    })

    const [result, setResult] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        axios.post(endpoint, formData, {
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => {
                console.log(res);
                if (res.status === 201) {
                    setResult('Ticket sended succesfully')
                }

            })
            .catch(err => {
                console.log(err.message);

                setResult('Ticket send failed')
                console.log(result);

            })


    }




    return (

        <main>
            <div className="container">
                {result === 'Ticket sended succesfully' ? <p className="text-success">{result}</p> : <p className="text-danger">{result}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="author" className="form-label">Author</label>
                        <input
                            name="author"
                            value={formData.author}
                            onChange={e => setFormData({ ...formData, author: e.target.value })}
                            type="text" className="form-control"
                            id="author" placeholder="Author name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                            name="title"
                            value={formData.title}
                            onChange={e => setFormData({ ...formData, title: e.target.value })}
                            type="text" className="form-control"
                            id="title" placeholder="Title" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="body" className="form-label">Article text</label>
                        <textarea
                            name="body"
                            value={formData.body}
                            onChange={e => setFormData({ ...formData, body: e.target.value })}
                            className="form-control" id="body"
                            rows="3"></textarea>
                    </div>
                    <div className="form-check mb-4">
                        <input
                            name="public"
                            checked={formData.public}
                            onChange={e => setFormData({ ...formData, public: e.target.checked })}
                            className="form-check-input" type="checkbox"
                            id="public" />
                        <label className="form-check-label" htmlFor="public">
                            Public
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Send ticket</button>
                </form>
            </div>

        </main>

    )
}