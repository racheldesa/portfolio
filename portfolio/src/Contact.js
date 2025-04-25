import React from "react";
import ReactDom from 'react-dom/client';

function Contact() {
    return (
        <div>
            <form>
                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Name" name="name"/>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Email" name="email"/>
                    </div>
                </div>
                <br/>
                <div class="row">
                    <textarea class="form-control" rows="5" id="message" name="message" placeholder="Message"></textarea>
                </div>
            </form>
            <br/>
            <div class="d-grid">
                <button type="button" class="btn btn-primary btn-block">Submit</button>
            </div>
        </div>
    );
}

export default Contact;