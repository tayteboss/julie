import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import LayoutGrid from '../../common/LayoutGrid';
import pxToRem from '../../../utils/pxToRem';

const HeaderWrapper = styled.header`
	height: calc(var(--vh) * 20);

	a, p {
		font-size: ${pxToRem(14)};
	}

	.layout-wrapper {
		height: 100%;
	}
`;

const HeaderInner = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	padding: ${pxToRem(8)} 0;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(4)} 0;
	}
`;

const LogoWrapper = styled.div``;

const Logo = styled.img`
	width: 200px;
	height: auto;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		width: 100px;
	}
`;

const HeaderBottom = styled.div``;

const ComingSoon = styled.a`
	grid-column: span 6;

	&:hover {
		color: red;
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: span 4;
	}
`;

const SocialLink = styled.a`
	&:hover {
		color: red;
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: span 2;
		text-align: right;
	}
`;

const Header = () => {
	return (
		<HeaderWrapper className="header">
			<LayoutWrapper>
				<HeaderInner>
					<LogoWrapper>
						<Logo src="/icons/logo.svg" />
					</LogoWrapper>
					<HeaderBottom>
						<LayoutGrid>
							<ComingSoon href="https://bookings.obeeapp.com/julie" target="_blank">
								Make a reservation
							</ComingSoon>
							<SocialLink href="https://www.instagram.com/julierestaurant/" target="_blank">
								Instagram
							</SocialLink>
						</LayoutGrid>
					</HeaderBottom>
				</HeaderInner>
			</LayoutWrapper>
		</HeaderWrapper>
	)
};

export default Header;
