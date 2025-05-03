import React from "react";
import ReactDom from "react-dom/client";

function References() {
    return (
        <div>
            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="card-header">Jacob Swanson</div>
                        <div class="card-body">
                            <p><strong>Experience Manager</strong> Best Buy</p>
                            <p><a href="jacob.swanson@bestbuy.com">jacob.swanson@bestbuy.com</a></p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <div class="card-header">Matthew Hamann</div>
                        <div class="card-body">
                            <p><strong>Assistant Teaching Professor, Kinesiology</strong> Iowa State University</p>
                            <p><a href="mhamann@iastate.edu">mhamann@iastate.edu</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default References;