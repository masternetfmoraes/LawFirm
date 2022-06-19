import { Container, Row, Col } from 'react-bootstrap';

export default function Team({teamContent}) {

	return (
		<>
			<section id={teamContent.sectionid}>
				<Container className={`${teamContent.bgcolor} ${teamContent.textcolor}`} fluid>
					<Row className="border border-1 border-start-0 border-top-0 border-bottom-1 border-left-0 border-end-0 border-secondary mb-2">
						<Col sm={4}>
							<p className={`${teamContent.colortitle} display-5 text-start mt-5`}>
								{teamContent.title}
							</p>
						</Col>
						<Col sm={8} >
							<p className="pt-sm-5 ">
                { teamContent.text}
							</p>
						</Col>
					</Row>
					<Container className="mt-sm-5">
						<Row>
							
                {
                  teamContent.items.map((item,img,name,occupation)=>{
                    return<>
                      <Col sm>
                        <img
									className="d-block w-sm-100 mx-auto rounded-circle shadow"
									src={item.img}
								/>
                      <p className="text-center h5">
                        { item.name}
                      </p>
                        <p className="text-center">
                          { item.occupation }
                        </p>
                        </Col>
                    </>
                  })
                }
								
								
								
							
						</Row>
					</Container>
				</Container>
			</section>
		</>
	);
}
