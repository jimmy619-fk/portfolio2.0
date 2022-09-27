interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updateAt: string;
}

export interface Social extends SanityBody {
    _type: 'social';
    title: string;
    url: string;
}

interface Image {
    _type: 'image';
    asset: {
        _ref: string;
        _type: 'reference'
    }
}
export interface pageInfo extends SanityBody {
    _type: 'pageInfo';
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
}

export interface Technology extends SanityBody {
    _type: 'skill';
    image: Image;
    progress: number;
    title: string;

}

export interface Skill extends SanityBody {
    _type: 'skill';
    image: Image;
    progress: number;
    title: string;

}

export interface Project extends SanityBody {
    _type: 'project';
    title: string;
    image: Image;
    summary: string;
    technologies: Technology[];
    linktobuild: string;

}

export interface Experience extends SanityBody {
    _type: 'experience';
    company: string;
    companyImage: Image;
    dateStarted: date;
    dateEnded: date;
    iscurrentlyworkinghere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];


}