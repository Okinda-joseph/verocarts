import React from 'react'
const subTitle = "Save the day";
const title = (
    <h2 className='text-capitalize title'>Join on day long free workshop for <b>advance <span>mastering</span></b> on sale</h2>
);
const description = "Limited time offer! hurry up";

const Register = () => {

  return (

   <section className='register-section padding-tb pb-0'>
    <div className='container'>
        <div className='row g-4 row-cols-lg-2 row-cols-1 align-items-center'>
            <div className='col'>
                <div className='section-header'>
                    <span className='subtitle'>{ subTitle }</span>
                    { title }
                    <p>{ description }</p>
                </div>
            </div>
            <div className='col'>
                <div className='section-wrapper'>
                    <h4 className='text-capitalize'>Register now</h4>
                    <form className='register-form'>
                        <input type="text" name='name' placeholder='Username' className='reg-input' />
                        <input type="email" name='email' placeholder='Email' className='reg-input' />
                        <input type="number" name='number' placeholder='Phone' className='reg-input' />
                        <button type='submit' className='lab-btn text-capitalize'>
                            Register now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
   </section>

  )

}

export default Register