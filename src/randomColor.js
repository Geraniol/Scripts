// String <= randomColor(Boolean <= true, Boolean <= false);
// 生成随机颜色 <= 是否为颜色名添加井号，是否生成透明通道

function randomColor(addNumberSign = true, enableAlphaChannel = false) {
    return { true: "#", false: "" }[addNumberSign] + {
        true: Math.floor(Math.random() * 0xffffffff).toString(16),
        false: Math.floor(Math.random() * 0xffffff).toString(16)
    }[enableAlphaChannel];
}
