---
id: "5"
topic: "cv"
title: "SSRFace: A face Recognition Framework Against Shallow Data"
authors: "Zhou, Y.T., Dy, J.B., Hsu, S.C., Hsu, Y.L., Yang, C.L., Hua, K.L. "
publisher: "Multimedia Tools and Applications"
publicationDate: "2022.11"
link: "https://drive.google.com/file/d/1q05r6Mc2usUjJVEBFbqFfoDzvZI7uZEp/view?usp=sharing"
---

Most existing deep-learning-based approaches rely on high-resolution large-scale datasets to improve their performance. However, obtaining such datasets is challenging for tasks such as face recognition. The best way to address this is first to address the issue deep-learning-based approaches experience when trained on limited samples or shallow datasets (i.e., lack of diversity). We propose SSRFace, a framework for face recognition on shallow datasets. In detail, SSRFace leverages two novel components: Segregate-Representation (SR) and SimInstance. SR utilizes unlabeled data and angular-margin-based loss to increase inter-class distance, improving class discrimination. SimInstance, on the other hand, has a straightforward approach to improving intra-class diversity. Our proposed SimInstance starts by learning the unique class distribution from the few samples before randomly sampling a feature representation to serve as new intra-class samples. We train our model on TinyFace, a shallow dataset, to show its capabilities. We show SSRFace performed better than other existing approaches with Rank-1 accuracy and mean average precision (mAP) when trained on shallow datasets.
