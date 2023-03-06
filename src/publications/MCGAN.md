---
id: "6"
topic: "cv"
title: "MCGAN: Mask Controlled Generative Adversarial Network for Image Retargeting"
authors: "Dy, J.B., Virtusio, J.J., Tan, D.S., Lin, Y.X., Ilao, J., Chen, Y.Y., Hua, K.L. "
publisher: "Neural Computing and Applications"
publicationDate: "2023.02"
link: "https://drive.google.com/file/d/1npdFyQj_NyznjlpBoFT5AKIETRAaBgwE/view?usp=sharing"
---

Image retargeting aims to resize a photograph without distorting its content. Recent solutions leverage generative adversarial networks (GANs) to learn an image’s internal distribution. Patches are then replicated and generated to fill the target aspect ratio to preserve the internal distribution. Although these approaches are somewhat successful, they do not have a sense of image semantics or the image’s contents, causing semantic errors during generation (e.g., a person with two heads). Our model addresses this by allowing user intervention. The users can preserve the objects they desire through user-defined masks. Our model enforces the masked object to appear at the user-defined location. It also utilizes a de-association regularizer to loosen the association of the selected object with its surroundings. Our method prevents object distortion and enables the user to remove or relocate the object from the input image while allowing the user to set its target size.
