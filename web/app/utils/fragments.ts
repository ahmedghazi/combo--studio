export const seo = `
	...,
	metaImage{
		asset->
	}
`;

export const figure = `
	...,
	image{
		asset->
	},
	caption,
	link->{
		_type,
		slug
	}
`;

export const blockContent = `
	...,
	en[]{
		...,
		markDefs[] {
			...,
			_type == "linkInternal" => {
				...,
				reference->,

			}
		}
	},
	fr[]{
		...,
		markDefs[] {
			...,
			_type == "linkInternal" => {
				...,
				reference->,
			}
		}
	}
`;
// export const imageUI = `
// 	_type == 'imageUI' => {
// 		...,
// 		image {
// 			...,
// 			asset->
// 		}
// 	}
// `;

export const textUI = `
	_type == 'textUI' => {
		...,
		text{
			${blockContent}
		},
		backgroundImage{
			...,
			asset->
		}
	}
`;

export const heroUI = `
	_type == 'heroUI' => {
		...,
		image {
			...,
			asset->
		}
	}
`;

export const contactsUI = `
	_type == 'contactsUI' => {
		...,
		items[] {
			...,
		}
	}
`;

export const listStudioUI = `
	_type == 'listStudioUI' => {
		...,
		items[]-> {
			...,
			modules[]{
				...
  		},
		}
	}
`;

export const listLieuUI = `
	_type == 'listLieuUI' => {
		...,
		items[]-> {
			...,
			modules[]{
				...,
				${listStudioUI}
  		},
		}
	}
`;

export const listLModulaireUI = `
	_type == 'listLModulaireUI' => {
		...,
		items[] {
			...,
			backgroundImage{
				...,
				asset->
			}
		}
	}
`;

export const callOutUI = `
	_type == 'callOutUI' => {
		...,
		backgroundImage{
			...,
			asset->
		}
	}
`;

export const splitImageTextUI = `
	_type == 'splitImageTextUI' => {
		...,
		image{
			...,
			asset->
		}
	}
`;

export const heroSplitScrollUI = `
	_type == 'heroSplitScrollUI' => {
		...,
		itemsLeft[]{
			...,
			image{
				asset->
			}
		},
		itemsRight[]{
			...,
			image{
				asset->
			}
		}
	}
`;

export const listCardImageTextUI = `
	_type == 'listCardImageTextUI' => {
		...,
		items[] {
			...,
			image{
				...,
				asset->
			}
		}
	}
	`;

export const modules = `
	...,
	${heroUI},
	${textUI},
	${contactsUI},
	${listStudioUI},
	${listLieuUI},
	${callOutUI},
	${listLModulaireUI},
	${splitImageTextUI},
	${heroSplitScrollUI},
	${listCardImageTextUI}
`;
