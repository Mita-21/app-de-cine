import styled from "styled-components";


export const StyledCard = styled.div`
.card-rating {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    position: sticky;   
    background: #7ff9c7;
    color: black;
    font-weight: 800;
    border-radius: 100%;
    margin: 0 0 0 0;
  }
  img {
    width: 100%;
    /* min-height: 340px; */
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 6px;   
    transform: scale(0.9);
    border: none;
    filter: drop-shadow(0 6px 3px rgba(0, 0, 0, 0.5));
    opacity: 0.9;
    transition: all ease 0.3s;
    :hover {
      transform: scale(0.95);
      filter: drop-shadow(0 0 9px rgba(47, 41, 44, 0.8));
      opacity: 1;
    }
    
  }
`;