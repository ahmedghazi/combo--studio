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

export const callOutUI = `
	_type == 'callOutUI' => {
		...,
		backgroundImage{
			...,
			asset->
		}
	}
`;

export const modules = `
	...,
	${heroUI},
	${textUI},
	${contactsUI},
	${listLieuUI},
	${callOutUI}
`;
