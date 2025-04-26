import React from "react";
import ReactDom from "react-dom/client";

function Education() {
    return (
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-header">Iowa State University</div>
                    <div class="card-body">
                        <p><strong>Bachelors of Science</strong> Electrical Engineering</p>
                        <p>Class of May 2024</p>
                    </div>   
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="card-header">Neuqua Valley High School</div>
                    <div class="card-body">
                        <p><strong>General Education</strong></p>
                        <p>Class of May 2019</p>
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default Education;