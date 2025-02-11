import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="FooterSection">
            <div className="FooterContent">
                <ul className="FooterIcons example-2">
                    <li className="icon-content">
                        <a
                            data-social="linkedin"
                            aria-label="LinkedIn"
                            href="https://www.linkedin.com/school/universidad-del-norte/posts/?feedView=all"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="filled"></div>
                            <svg
                                xmlSpace="preserve"
                                viewBox="0 0 16 16"
                                className="bi bi-linkedin"
                                fill="currentColor"
                                height="16"
                                width="16"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="currentColor"
                                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474
0 16 .513 16 1.146v13.708c0 .633-.526
1.146-1.175 1.146H1.175C.526 16 0
15.487 0 14.854V1.146zm4.943
12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837
0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248s-1.358
.539-1.358 1.248c0 .694.521 1.248 1.327
1.248h.015zm4.908 8.212V9.358c0-.216.016-.432.08-.586.173-.431.568-.878
1.232-.878.869 0 1.217.662 1.217
1.634v3.865h2.401V9.25c0-2.22-1.185-3.252-2.765-3.252-1.275
0-1.846.7-2.166 1.193h-.016V6.169h-2.4c.03.678
0 7.225 0 7.225h2.4z"
                                ></path>
                            </svg>
                        </a>
                    </li>
                    <li className="icon-content">
                        <a
                            data-social="github"
                            aria-label="GitHub"
                            href="https://github.com/proyectosingenieriauninorte/MIPSVisualSim"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="filled"></div>
                            <svg
                                xmlSpace="preserve"
                                viewBox="0 0 16 16"
                                className="bi bi-github"
                                fill="currentColor"
                                height="16"
                                width="16"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="currentColor"
                                    d="M8 0C3.58 0 0 3.58 0 8a8.001 8.001 0 0 0 5.47 7.59c.4.07.55-.17.55-.38v-1.27c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.53-.01-.53.63 0 1.08.59 1.23.82.72 1.2 1.87.86 2.33.66.07-.52.28-.86.51-1.06-1.78-.21-3.64-.89-3.64-3.96 0-.87.31-1.58.82-2.14-.08-.2-.36-1.03.08-2.12 0 0 .67-.21 
2.2.82a7.6 7.6 0 0 1 2-.27c.68 0 1.36.09 
2 .27 1.53-1.04 2.2-.81 2.2-.81.44 
1.09.16 1.92.08 2.12.51.56.82 1.27.82 
2.14 0 3.08-1.87 3.75-3.65 3.95.29.25.54.72.54 
1.48v2.2c0 .21.15.45.55.38A8.01 8.01 0 0 0 
16 8c0-4.42-3.58-8-8-8Z"
                                ></path>
                            </svg>
                        </a>
                    </li>
                </ul>
                <p>© 2024 All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;