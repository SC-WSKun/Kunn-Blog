export class BlogError extends Error {
	constructor(message = "some error happen in blog") {
		super(message);
		this.name = message;
	}
}
