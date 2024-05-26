const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <section className='max-w-4xl mx-auto md:px-8 pb-3'>
            <div className="flex flex-col justify-center items-center gap-3 md:flex-row md:justify-between md:items-center">
                <p className='text-secondary-text text-center md:text-right'>
                    © {currentYear} Gilles de PERETTI. All Rights Reserved.
                </p>
            </div>
        </section >
    );
}

export default Footer;
