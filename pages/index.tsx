import Head from 'next/head';
import { renderMetaTags } from 'react-datocms';
import styled from 'styled-components';
import { getPage } from '../lib/datocms';
import { NextSeo } from 'next-seo';
import VideoComponent from '../components/common/MediaStack/VideoComponent';
import { useInView } from 'react-intersection-observer';
import ImageGallery from '../components/sections/ImageGallery';

const PageWrapper = styled.div``;

type Props = {
	data: {}
};

const Page = (props: Props) => {
	const data = {
		url: '/images/placeholder-video.mp4'
	};

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-5%'
	});

	return (
		<PageWrapper ref={ref}>
			<NextSeo
				title="Julie Restaurant"
				description="*** TO BE UPDATED ***"
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
	// const data = await getPage('home');
	const data = false;

	return {
		props: {
			data,
		},
	};
}

export default Page;
