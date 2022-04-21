import Link from "next/link";
import ProjectLayout from "../../components/projects/ProjectLayout";
import ImageDesc from "../../components/widgets/ImageDesc";

export default function ElectronAutodrawer() {
    return (
        <ProjectLayout>
            <section>
                <h2>1. Introduction</h2>
                <p>Autodrawer is a project of mine that draws an image
                    file in Paint 3D using its tools. Autodrawer is also
                    available in a <Link href="/projects/nodeautodrawer">
                    Node Autodrawer version</Link> and a <Link href="/projects/pythonautodrawer">
                    Python Autodrawer version</Link>. The idea is very
                    simple: the program reads every pixel of the image then
                    uses Paint 3D's tools to draw.
                </p>
            </section>
            <section>
                <h2>2. Making of</h2>
                <p>I decided to create the "Electron version" of the
                    Autodrawer right after I finished the Node version.
                    The biggest challenge I faced was the project structure:
                    by the time I created the Electron Autodrawer I hadn't
                    learned React yet, so only pure HTML and JS was used to
                    create the components. Moving forward, the second biggest
                    challenge I faced was packing the whole program to an
                    executable file: bundling a lot of files and its dependencies
                    was a huge pain because I need to configure all the building
                    process on Gulp.
                </p>
                <ImageDesc src="/projects/electronautodrawer/gulpbuildfrontend.png">
                    <i>Process to bundle Frontend scripts. Gulp together with Webpack
                        was used.
                    </i>
                </ImageDesc>
            </section>
            <section>
                <h2>3. Building and usage</h2>
                <p>All the building and usage process is covered on the <Link href="https://github.com/FelipeFlohr/electron-autodrawer">
                    Project's Github Repository</Link>.</p>
            </section>
            <section>
                <h2>4. Technologies Used</h2>
                <p>The following technologies were used:</p>
                <ul>
                    <li>Typescript: main technology used in the project.</li>
                    <li>Electron: used for creating the Desktop app.</li>
                    <li>HTML: used for writing the pages (I hand't learned
                        React at the time)
                    </li>
                    <li>Bootstrap and Sass: used for styling.</li>
                    <li><Link href="http://robotjs.io/">Robot.js:</Link> used
                        for desktop automation.</li>
                    <li>Gulp: used for the building process. Used together with
                        Babel and Webpack for "uglification" and compilation of Sass
                        and TypeScript files.
                    </li>
                </ul>
            </section>
        </ProjectLayout>
    )
}