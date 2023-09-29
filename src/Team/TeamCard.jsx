import React from 'react'

const TeamCard = (props) => {
    return (
        <>
            
            <div className="container mt-5">
                <div class="row pb-5 mb-4">
                    {
                        props.MenuData.map((curElem) => {
                            const { id, logo, name, title, category, facebook, instagram, twitter, linkdin } = curElem;
                            return (
                                <div class="col-lg-3 col-md-6 mb-4 mb-lg-0" key={id}>
                                    <div class="card shadow-sm border-0 rounded">
                                        <div class="card-body p-0"><img src={logo} alt="" class="w-100 card-img-top" />
                                            <div class="p-4">
                                                <h5 class="mb-0">{name}</h5>
                                                <h7>{category}</h7>
                                                <p class="small text-muted">{title}</p>
                                                <ul class="social mb-0 list-inline mt-3">
                                                    <li class="list-inline-item m-0"><a href={facebook} class="social-link"><i class="fa-brands fa-facebook"></i></a></li>
                                                    <li class="list-inline-item m-0"><a href={twitter} class="social-link"><i class="fa-brands fa-twitter"></i></a></li>
                                                    <li class="list-inline-item m-0"><a href={instagram} class="social-link"><i class="fa-brands fa-instagram"></i></a></li>
                                                    <li class="list-inline-item m-0"><a href={linkdin} class="social-link"><i class="fa-brands fa-linkedin"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );

                        }
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default TeamCard;