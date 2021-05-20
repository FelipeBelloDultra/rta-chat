import styled from 'styled-components';

export const LoaderContainer = styled.div`
  line-height: 11px;
  text-indent: 0;

  .dot {
		width: 8px;
		height: 8px;
		margin: 1px;
		background-color: #FFF;
		border-radius: 100%;
		display: inline-block;
		animation: bouncedelay 0.8s infinite ease-in-out;
		animation-fill-mode: both;

		&.dot-2 {
			animation-delay: -0.32s;
		}

		&.dot-3 {
			animation-delay: -0.16s;
		}

    & + .dot {
      margin-left: 5px;
    }
	}

  @keyframes bouncedelay{
    0%,
    80%,
    to {
      transform: scale(0.7);
    }
    40% {
      transform: scale(1);
    }
  }
`;
