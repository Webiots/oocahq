import React from 'react';
import { Pagination, PaginationItem, PaginationLink  } from 'reactstrap';
import './pagination.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Paginations(match: {active?:boolean, hover?:boolean, dot:boolean}) {
  return (
                   <Pagination className={match.dot?'pagination-dots':'pagination-shadow'}>
                   {!match.dot? <PaginationItem>
                      <PaginationLink href="#">
                        <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
                        <span className="sr-only">Prev</span>
                      </PaginationLink>
                    </PaginationItem>
                    :''}
                    <PaginationItem>
                      <PaginationLink href="#">
                        {!match.dot?<span>1</span>:''}
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className={match.active?'active':''}>
                      <PaginationLink href="#" >
                         {!match.dot?<span>2</span>:''}
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className={match.hover?'hover':''}>
                      <PaginationLink href="#">
                         {!match.dot?<span>3</span>:''}
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">
                         {!match.dot?<span>4</span>:''}
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">
                         {!match.dot?<span>5</span>:''}
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">
                         {!match.dot?<span>6</span>:''}
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">
                         {!match.dot?<span>7</span>:''}
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">
                         {!match.dot?<span>8</span>:''}
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">
                         {!match.dot?<span>9</span>:''}
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">
                         {!match.dot?<span>10</span>:''}
                      </PaginationLink>
                    </PaginationItem>
                    {!match.dot?  <PaginationItem>
                      <PaginationLink href="#">
                        <span className="sr-only">Next</span>
                        <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
                      </PaginationLink>
                    </PaginationItem>:''}
                  </Pagination>
                
  );
}

export default Paginations;