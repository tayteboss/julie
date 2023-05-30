import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import ImageGallery from '../components/sections/ImageGallery';

const PageWrapper = styled.div``;

type Props = {
	data: {}
};

const Page = (props: Props) => {
	return (
		<PageWrapper>
			<NextSeo
				title="Julie Restaurant"
				description="Seasonal, casual dining in a unique heritage setting"
				openGraph={{
					images: [
						{
							url: '/images/julie-open-graph.jpg',
							width: 1200,
							height: 630,
						},
					],
				}}
			/>
			<ImageGallery />
		</PageWrapper>
	);
};

export async function getStaticProps() {
	const data = false;

	return {
		props: {
			data,
		},
	};
}

export default Page;
