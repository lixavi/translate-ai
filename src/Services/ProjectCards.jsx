import React from 'react'

const ProjectCards = (props) => {
    return (
        <>
            <div className="container mt-5">

                <div class="row pb-5 mb-4">
                    {
                        props.MenuData.map((curElem) => {
                            const { id, logo, title, category,Date} = curElem;
                            return (
                                <div class="col-lg-3 col-md-6 mb-4 mb-lg-0" key={id}>
                                    <div class="card shadow-sm border-0 rounded">
                                        <div class="card-body p-0"><img src={logo} alt="" class="w-100 card-img-top" />
                                            <div class="p-4">
                                                <h7 className="fw-bold">{category}</h7><br />
                                                <p class="">{Date}</p>
                                                <p class="small text-muted">{title}</p>
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

export default ProjectCards;