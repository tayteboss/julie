import Head from 'next/head';
import { renderMetaTags } from 'react-datocms';
import styled from 'styled-components';
import { getPage } from '../lib/datocms';
import { NextSeo } from 'next-seo';
import VideoComponent from '../components/common/MediaStack/VideoComponent';
import { useInView } from 'react-intersection-observer';

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
				title="Julie - Coming soon"
				description="*** TO BE UPDATED ***"
				// openGraph={{
				// 	images: [
				// 		{
				// 			url: siteData?.seoImage?.url,
				// 			width: 800,
				// 			height: 600,
				// 		},
				// 	],
				// }}
			/>
			<VideoComponent data={data} inView={inView} />
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
