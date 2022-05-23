import { Navbar,Container,Nav, NavDropdown } from 'react-bootstrap';

export default function TopNavbar({ navbarContent }){
  return(
    <>
      <Navbar bg={`${navbarContent.bg}`} expand="lg" variant={`${navbarContent.variant}`}>
  <Container>
    <Navbar.Brand href="#home">
      {navbarContent.brandname}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        {
          navbarContent.items.map((items,coisa, label, url)=>{
            return <Nav.Link href={items.url}>{ items.label }</Nav.Link>
          })
        }
       
        <NavDropdown title="Extras" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  );
}