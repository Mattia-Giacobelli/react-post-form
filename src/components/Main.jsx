export default function Main() {

    return (

        <main>
            <div className="container">
                <form >
                    <div class="mb-3">
                        <label for="author" class="form-label">Author</label>
                        <input
                            type="text" class="form-control"
                            id="author" placeholder="Author name" />
                    </div>
                    <div class="mb-3">
                        <label for="title" class="form-label">Author</label>
                        <input
                            type="text" class="form-control"
                            id="title" placeholder="Title" />
                    </div>
                    <div class="mb-3">
                        <label for="body" class="form-label">Article text</label>
                        <textarea class="form-control" id="body" rows="3"></textarea>
                    </div>
                    <div class="form-check">
                        <input
                            class="form-check-input" type="checkbox"
                            value="" id="checkDefault" />
                        <label class="form-check-label" for="checkDefault">
                            Default checkbox
                        </label>
                    </div>
                </form>
            </div>

        </main>

    )
}