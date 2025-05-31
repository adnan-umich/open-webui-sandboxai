<script>
    import { onMount } from 'svelte';
    
    onMount(() => {
        document.title = "About Us - Sandbox AI";
    });
</script>

<div class="about-container">
    <!-- Hero Section -->
    <section class="hero-section">
        <div class="hero-content">
            <h1 class="hero-title">Pioneering <span class="accent">AI Solutions</span> for Tomorrow's Challenges</h1>
            <p class="hero-subtitle">Sandbox AI brings together cutting-edge technology and scientific expertise to create intelligent solutions that transform industries.</p>
        </div>
        <div class="hero-pattern"></div>
    </section>

    <!-- Company Section -->
    <section class="company-section">
        <div class="section-content">
            <h2 class="section-title">Our <span class="accent">Mission</span></h2>
            <p class="section-text">
                We're dedicated to making advanced AI technology accessible, ethical, and impactful. 
                Our open-source approach combined with scientific rigor ensures that innovation 
                remains in the hands of those who need it most.
            </p>
            <div class="stats-container">
                <div class="stat-item">
                    <div class="stat-number">2025</div>
                    <div class="stat-label">Founded</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">15+</div>
                    <div class="stat-label">Team Members</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">500+</div>
                    <div class="stat-label">Projects Delivered</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Leadership Section -->
    <section class="leadership-section" id="leadership">
        <h2 class="section-title">Our <span class="accent">Leadership</span></h2>
        
        <div class="founders-container">
            <!-- Founder 1 -->
            <div class="founder-card">
                <div class="founder-image">
                    <div class="image-frame">
                    <!--
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Adnan Hafeez" />
                    -->
                    </div>
                </div>
                <div class="founder-details">
                    <h3 class="founder-name">Adnan Hafeez</h3>
                    <p class="founder-credentials">B.Sc, M.Sc, CCPM</p>
                    <p class="founder-title">Co-Founder & Chief Technology Officer</p>
                    <p class="founder-bio">
                        With over a decade of experience in AI systems architecture, Adnan leads our technical innovation. 
                        His research in neural network optimization has been published in leading academic journals, 
                        and his Certified Project Management expertise ensures our solutions are delivered with precision and excellence.
                    </p>
                </div>
            </div>

            <!-- Founder 2 -->
            <div class="founder-card">
                <div class="founder-image">
                    <div class="image-frame">
                    <!--
                        <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Alexis Castellenos" />
                    -->
                    </div>
                </div>
                <div class="founder-details">
                    <h3 class="founder-name">Alexis Castellenos</h3>
                    <p class="founder-credentials">B.Sc, M.Sc</p>
                    <p class="founder-title">Co-Founder & Chief Executive Officer</p>
                    <p class="founder-bio">
                        Alexis brings a unique blend of technical expertise and business acumen to Open WebUI. 
                        With a Master's in Computational Science and experience leading AI initiatives at Fortune 500 companies, 
                        she drives our strategic vision and ensures our technology creates meaningful impact.
                    </p>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Contact CTA -->
    <section class="contact-section">
        <div class="cta-content">
            <h2 class="section-title">Ready to <span class="accent">Transform</span> Your Business?</h2>
            <p>Let's discuss how our AI solutions can address your unique challenges.</p>
            <a href="/consulting" class="cta-button">Get in Touch</a>
        </div>
    </section>
</div>

<style>
    /* Base Styles */
    .about-container {
        width: 100%;
        max-width: 100vw;
        background: linear-gradient(180deg, rgba(13,11,28,0.02) 0%, rgba(26,27,46,0.05) 100%);
    }

    section {
        padding: 4rem 2rem;
        margin: 0 auto;
        max-width: 1200px;
    }

    .section-title {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 2rem;
        text-align: center;
    }

    .accent {
        background: linear-gradient(90deg, #00c6ff, #0072ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    :global(html.her) .accent {
        background: linear-gradient(90deg, #ffcc33, #ff5e39);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    /* Hero Section */
    .hero-section {
        position: relative;
        min-height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 6rem 2rem 4rem;
        overflow: hidden;
    }

    .hero-pattern {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: 
            radial-gradient(circle at 20% 30%, rgba(0, 183, 255, 0.07) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(82, 109, 255, 0.05) 0%, transparent 50%);
        z-index: -1;
    }

    :global(html.her) .hero-pattern {
        background-image: 
            radial-gradient(circle at 20% 30%, rgba(255, 204, 51, 0.07) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 94, 57, 0.05) 0%, transparent 50%);
    }

    .hero-content {
        max-width: 800px;
    }

    .hero-title {
        font-size: 3rem;
        font-weight: 800;
        line-height: 1.2;
        margin-bottom: 1.5rem;
    }

    .hero-subtitle {
        font-size: 1.25rem;
        line-height: 1.6;
        max-width: 600px;
        margin: 0 auto;
        opacity: 0.8;
    }

    /* Company Section */
    .company-section {
        background: linear-gradient(45deg, rgba(19,17,28,0.7) 0%, rgba(26,27,46,0.7) 100%);
        border-radius: 20px;
        color: white;
        margin: 2rem auto;
        padding: 3rem;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }

    :global(html.her) .company-section {
        background: linear-gradient(45deg, rgba(110,34,25,0.7) 0%, rgba(152,55,36,0.7) 100%);
    }

    .section-text {
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 2rem;
        text-align: center;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
    }

    .stats-container {
        display: flex;
        justify-content: center;
        gap: 3rem;
        flex-wrap: wrap;
        margin-top: 3rem;
    }

    .stat-item {
        text-align: center;
    }

    .stat-number {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        background: linear-gradient(90deg, #ffffff, #a1c4fd);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .stat-label {
        font-size: 1rem;
        opacity: 0.8;
    }

    /* Leadership Section */
    .leadership-section {
        padding: 5rem 2rem;
    }

    .founders-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 3rem;
        margin-top: 3rem;
    }

    .founder-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 350px;
        border-radius: 16px;
        overflow: hidden;
        background: rgba(255,255,255,0.03);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.05);
        padding: 2rem;
        transform: translateY(0);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .founder-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 183, 255, 0.1);
    }

    :global(html.her) .founder-card:hover {
        box-shadow: 0 10px 30px rgba(255, 94, 57, 0.1);
    }

    .founder-image {
        margin-bottom: 1.5rem;
    }

    .image-frame {
        position: relative;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        overflow: hidden;
    }

    .image-frame::after {
        content: "";
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        border-radius: 50%;
        background: linear-gradient(135deg, rgba(0, 183, 255, 0.5), rgba(0, 114, 255, 0.2));
        z-index: -1;
    }

    :global(html.her) .image-frame::after {
        background: linear-gradient(135deg, rgba(255, 204, 51, 0.5), rgba(255, 94, 57, 0.2));
    }

    .image-frame img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        border: 3px solid rgba(255,255,255,0.1);
    }

    .founder-details {
        text-align: center;
    }

    .founder-name {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 0.25rem;
    }

    .founder-credentials {
        font-size: 0.9rem;
        color: rgba(255,255,255,0.6);
        margin-bottom: 0.25rem;
    }

    .founder-title {
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 1rem;
        color: rgba(0, 183, 255, 0.9);
    }

    :global(html.her) .founder-title {
        color: rgba(255, 204, 51, 0.9);
    }

    .founder-bio {
        font-size: 0.95rem;
        line-height: 1.6;
        opacity: 0.8;
    }

    /* Contact Section */
    .contact-section {
        padding: 5rem 2rem;
        text-align: center;
        background: linear-gradient(135deg, rgba(19,17,28,0.3) 0%, rgba(26,27,46,0.3) 100%);
        border-radius: 20px;
        margin: 2rem auto 4rem;
    }

    :global(html.her) .contact-section {
        background: linear-gradient(135deg, rgba(110,34,25,0.3) 0%, rgba(152,55,36,0.3) 100%);
    }

    .cta-button {
        display: inline-block;
        padding: 0.75rem 1.5rem;
        border-radius: 50px;
        font-size: 1rem;
        font-weight: 600;
        background: linear-gradient(135deg, #00c6ff, #0072ff);
        color: white;
        text-decoration: none;
        margin-top: 1.5rem;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        border: none;
        box-shadow: 0 4px 15px rgba(0, 183, 255, 0.3);
    }

    :global(html.her) .cta-button {
        background: linear-gradient(135deg, #ffcc33, #ff5e39);
        box-shadow: 0 4px 15px rgba(255, 94, 57, 0.3);
    }

    .cta-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 183, 255, 0.4);
    }

    :global(html.her) .cta-button:hover {
        box-shadow: 0 6px 20px rgba(255, 94, 57, 0.4);
    }

    /* Responsive */
    @media (max-width: 768px) {
        .hero-title {
            font-size: 2.5rem;
        }

        .section-title {
            font-size: 2rem;
        }

        .founders-container {
            gap: 2rem;
        }

        .founder-card {
            padding: 1.5rem;
        }

        .image-frame {
            width: 120px;
            height: 120px;
        }

        .company-section {
            padding: 2rem;
        }
    }

    @media (max-width: 480px) {
        .hero-title {
            font-size: 2rem;
        }

        .hero-subtitle {
            font-size: 1rem;
        }

        .section-title {
            font-size: 1.75rem;
        }

        .stat-number {
            font-size: 2rem;
        }

        section {
            padding: 3rem 1rem;
        }
    }
</style>
