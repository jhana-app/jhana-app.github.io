import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'src/astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <img
              className="h-10"
              src="/assets/img/logo.png"
              alt="Logo"
              loading="lazy"
            />
          }
          name="Jhana.app"
        />
      </a>

      <NavMenu>
        {/* <NavMenuItem href="/posts/">Blogs</NavMenuItem> */}
        <NavMenuItem href="/">GitHub</NavMenuItem>
        {/* <NavMenuItem href="/">Twitter</NavMenuItem> */}
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
