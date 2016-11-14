import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { Post } from "../../models/post";
import { User } from "../../models/user";

@Component({
    selector: "post-form",
    templateUrl: "./app/components/post-form/post-form.component.html",
    styleUrls: ["./app/components/post-form/post-form.component.css"]
})
export class PostFormComponent implements OnInit {

    nowDatetimeLocal: string;
    publicationDateScheduled: boolean = false;

    @Output() postSubmitted: EventEmitter<Post> = new EventEmitter();

    ngOnInit(): void {
        this.nowDatetimeLocal = this._formatDateToDatetimeLocal(new Date());
    }

    private _formatDateToDatetimeLocal(date: Date) {
        return `
            ${this._fixPad(date.getFullYear(), 4)}-
            ${this._fixPad(date.getMonth() + 1, 2)}-
            ${this._fixPad(date.getDate(), 2)}T
            ${this._fixPad(date.getHours(), 2)}:
            ${this._fixPad(date.getMinutes(), 2)}`.replace(/\n/gi, "").replace(/ /gi, "");
    }

    private _fixPad(datePart: number, length: number): string {
        return `0000${datePart}`.slice(-length);
    }

    private _getPostPublicationDate(formPublicationDate: string): number {
        let publicationDate: Date;
        if (this.publicationDateScheduled) {
            publicationDate = new Date(formPublicationDate);
            if (isNaN(publicationDate.getTime())) {
                publicationDate = new Date();
            }
        }
        else {
            publicationDate = new Date();
        }
        return publicationDate.getTime();
    }

    setScheduling(schedule: true): void {
        this.publicationDateScheduled = schedule;
    }

    submitPost(form: FormGroup): void {

        /*-------------------------------------------------------------------------------------------------------------|
         | ~~~ Purple Path ~~~                                                                                         |
         |-------------------------------------------------------------------------------------------------------------|
         | Aquí no tienes que hacer nada más allá de comprobar que los datos del formulario se recogen correctamente y |
         | tienen 'forma' de Post. Si no es así, al hacer 'Post.fromJson()' se instanciará un post que no se parece en |
         | nada a lo indicado en el formulario. Por tanto, pon especial atención a que los nombres indicados en los    |
         | distintos elementos del formulario se correspondan con las propiedades de la clase Post.                    |
         |-------------------------------------------------------------------------------------------------------------*/

        let post: Post = Post.fromJson(form.value);
        post.likes = 0;
        post.author = User.defaultUser();
        post.publicationDate = this._getPostPublicationDate(form.value.publicationDate);
        this.postSubmitted.emit(post);
    }
}
