document.addEventListener("DOMContentLoaded", () => {
    class Flip_three_side {
        constructor(id, class_right_buttons, class_left_buttons) {
            this.card = document.querySelector(`#${id}`);
            this.buttons_right = document.querySelectorAll(
                `#${id} .${class_right_buttons}`
            );
            this.buttons_left = document.querySelectorAll(
                `#${id} .${class_left_buttons}`
            );
            this.degree = 0;
            // this.transition = "transform 1s cubic-bezier(.05,.94,.79,.28)";
            this.transition = "transform 0.3s ease-in-out";

            this.buttons_right.forEach((btn) => {
                btn.addEventListener("click", this.toRight.bind(this));
            });
            this.buttons_left.forEach((btn) => {
                btn.addEventListener("click", this.toLeft.bind(this));
            });
        }
        rotate = () => {
            this.card.style.transition = this.transition;
            this.card.style.transform = `rotateY(${this.degree}deg)`;

            if (this.degree === 360 || this.degree === -360) {
                setTimeout(() => {
                    this.degree = 0;
                    this.card.style.transition = "none";
                    this.card.style.transform = `rotateY(${this.degree}deg)`;
                }, 300);
            }
        };

        toRight = () => {
            this.degree += 120;
            this.rotate();
        };
        toLeft = () => {
            this.degree -= 120;
            this.rotate();
        };
    }

    const card_1 = new Flip_three_side("card_1", "right", "left");
    const card_2 = new Flip_three_side("card_2", "right", "left");
    const card_3 = new Flip_three_side("card_3", "right", "left");
});
