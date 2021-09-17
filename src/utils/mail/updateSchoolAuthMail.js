module.exports = updateSchoolAuthMail = (name, code, date) => {
    return `
        <div>
            <div style=" background: #005CE4; width:100%;">
                <div style=" padding: 20px 5px; ">
                    <div>
                        <div style=" text-align: center; padding: 0 0 10px; ">
                            <h1 style="color: #fff;">School Software</h1>
                        </div>
                        <div>
                            <div style="background: #fff;
                            padding: 10px 20px;
                            border-radius: 10px;
                            margin: 5px;
                            text-align: center;">
                                <div>
                                    <h2>Update Details</h2>
                                    <hr />
                                    <h3>${name},</h3>
                                    <br />
                                    Hello,
                                    <br />
                                    Please use the Verification code below on the <strong>School
                                        Software</strong> website.
                                    <br>
                                    <h3>${code}</h3>
                                    <div style="padding: 0 20px;">
                                        <div>
                                            If you didn't request this, you can ignore this email or let us know.
                                        </div>
                                        <br />
                                        <div>
                                            <div>Thanks!</div>
                                            <div><strong>School Software</strong> team</div>
                                        </div>
                                        <br />
                                        <div style="text-align: end;">
                                            ${date}
                                        </div>
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}
