const color_gradients= { "FreeOffer": ["0xFF9FFF72", "0xFF68E524", "0xFF68E524", "0xFF9FFF72", "0xFFE0FFA0"], "Golden": ["0xFFFFFABC", "0xFFFFD12E", "0xFFF29928", "0xFFFFD12E"], "Purple": ["0xFFFABCFF", "0xFFD12EFF", "0xFF9928F2", "0xFFD12EFF"], "DoubleTokenGold": ["0xFFFFDAAC", "0xFFFFD12E", "0xFFF29928", "0xFFFFD12E"], "DefaultName": ["0xFFFFFFFF", "0xFFFFFFFF"], "Name1": ["0xFF45ffb1", "0xFF2eef60", "0xFF00c74b", "0xFF2eef60"], "Name2": ["0xFFfff5d6", "0xFFFFDBA7", "0xFFffb777", "0xFFFFDBA7"], "Name3": ["0xFFffffce", "0xFFfff76c", "0xFFffe034", "0xFFfff76c"], "Name4": ["0xFFFDF542", "0xFFfdd000", "0xFFFF9005", "0xFFfdd000"], "Name5": ["0xFFffd49d", "0xFFFFAA82", "0xFFff7b4f", "0xFFFFAA82"], "Name6": ["0xFFffae1f", "0xFFff7b06", "0xFFff382e", "0xFFff7b06"], "Name7": ["0xFFff9368", "0xFFFF6178", "0xFFf51a73", "0xFFFF6178"], "Name8": ["0xFFffc92f", "0xFFff9c4c", "0xFFff6856", "0xFFf931a3", "0xFFe300b9", "0xFFf931a3", "0xFFff6856", "0xFFff9c4c"], "Name9": ["0xFF20fbff", "0xFF00d0fa", "0xFF359eff", "0xFF00d0fa"], "Name10": ["0xFFFF6DEA", "0xFFFA00D6", "0xFFCA00F4", "0xFFFA00D6"], "Name11": ["0xFFdffd67", "0xFF7efc7d", "0xFF13cf00", "0xFF7efc7d"], "ComingSoon": ["0xFFFFFABC", "0xFFFFD12E", "0xFFF8A535", "0xFFFFD12E"], "LeagueBonusDay": ["0xFFFFDAAC", "0xFFFFD12E", "0xFFF29928", "0xFFFFD12E"], "PlayerTitleGold": ["0xFFFFDAAC", "0xFFFFD12E", "0xFFF29928", "0xFFFFD12E"], "MaxLevelGold": ["0xFFFFFABC", "0xFFFFD12E", "0xFFF29928", "0xFFFFD12E"], "ClubPiggyGold": ["0xFFFFFABC", "0xFFFFD12E", "0xFFF29928", "0xFFFFD12E"], "Plus": ["0xFFF9E6FF", "0XFFE2A3FF", "0xFFFFFE98", "0xFFC2F3F2"] },
function generateGradientCSSByName(Name) {
            return generateGradientCSS(color_gradients[Name])
        }
function generateSymmetricGradient(colors) {
            const length = colors.length;
            if (length < 3) {
                throw new Error("渐变文字最少需要三种颜色！");
            }

            const half = Math.floor((length - 1) / 2);
            const isOdd = length % 2 !== 0;

            let gradientArray = [];
            if (isOdd) {
                gradientArray = [
                    ...colors.slice(0, half + 1),
                    ...colors.slice(half).reverse(),
                    ...colors.slice(1, half + 1),
                    ...colors.slice(half).reverse()
                ];
            } else {
                gradientArray = [
                    ...colors,
                    ...colors.slice(0, half).reverse(),
                    ...colors,
                    ...colors.slice(0, half).reverse()
                ];
            }

            return gradientArray.map(convertARGB).join(", ");
        }

function generateGradientCSS(gradientArray) {
            const gradientString = generateSymmetricGradient(gradientArray);
            return `background-image: linear-gradient(to right, ${gradientString}); background-position: -100% 0;`;
        }
function convertARGB(argb) {
    const hex = argb.slice(2);
    const r = parseInt(hex.slice(2, 4), 16);
    const g = parseInt(hex.slice(4, 6), 16);
    const b = parseInt(hex.slice(6, 8), 16);
    const a = parseInt(hex.slice(0, 2), 16) / 255; 
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}
