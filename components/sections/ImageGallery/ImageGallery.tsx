import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import _ from 'lodash';

type StyledProps = {
	$isTop: boolean;
};

const ImageGalleryWrapper = styled.div`
	position: relative;
`;

const ImageWrapper = styled.div<StyledProps>`
	position: absolute;
	inset: 0;
	width: 100%;
	height: calc(var(--vh) * 80);
	z-index: ${(props) => props.$isTop ? 1 : 0};
`;

const ImageGallery = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCount((count) => {
				if (count === 10) {
					return 0;
				} else {
					return count + 1;
				}
			});
		}, 2000);
	
		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<ImageGalleryWrapper>
			<ImageWrapper $isTop={count === 0}>
				<Image
					src={`/images/hero-1.jpg`}
					layout="fill"
					objectFit="cover"
					priority={true}
				/>
			</ImageWrapper>
			<ImageWrapper $isTop={count === 1}>
				<Image
					src={`/images/hero-2.jpg`}
					layout="fill"
					objectFit="cover"
					priority={true}
				/>
			</ImageWrapper>
			<ImageWrapper $isTop={count === 2}>
				<Image
					src={`/images/hero-3.jpg`}
					layout="fill"
					objectFit="cover"
					priority={true}
				/>
			</ImageWrapper>
			<ImageWrapper $isTop={count === 3}>
				<Image
					src={`/images/hero-4.jpg`}
					layout="fill"
					objectFit="cover"
					priority={true}
				/>
			</ImageWrapper>
			<ImageWrapper $isTop={count === 4}>
				<Image
					src={`/images/hero-5.jpg`}
					layout="fill"
					objectFit="cover"
					priority={true}
				/>
			</ImageWrapper>
			<ImageWrapper $isTop={count === 5}>
				<Image
					src={`/images/hero-6.jpg`}
					layout="fill"
					objectFit="cover"
					priority={true}
				/>
			</ImageWrapper>
			<ImageWrapper $isTop={count === 6}>
				<Image
					src={`/images/hero-7.jpg`}
					layout="fill"
					objectFit="cover"
					priority={true}
				/>
			</ImageWrapper>
			<ImageWrapper $isTop={count === 8}>
				<Image
					src={`/images/hero-9.jpg`}
					layout="fill"
					objectFit="cover"
					priority={true}
				/>
			</ImageWrapper>
			<ImageWrapper $isTop={count === 9}>
				<Image
					src={`/images/hero-10.jpg`}
					layout="fill"
					objectFit="cover"
					priority={true}
				/>
			</ImageWrapper>
			<ImageWrapper $isTop={count === 10}>
				<Image
					src={`/images/hero-11.jpg`}
					layout="fill"
					objectFit="cover"
					priority={true}
				/>
			</ImageWrapper>
		</ImageGalleryWrapper>
	);
};

export default ImageGallery;
