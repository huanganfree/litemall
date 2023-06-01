
// 模拟数据
const pointsArr = [
    {
        latitude: 23.019849,
        longitude: 113.122983
    },
    {
        latitude: 26.104298,
        longitude: 115.115436,
    },
    {
        latitude: 29.715383,
        longitude: 118.409541
    },
    {
        latitude: 30.282952,
        longitude: 120.237683
    },
    {
        latitude:31.157697,
        longitude: 121.427699
    },
    {
        latitude: 31.834157,
        longitude: 119.892751
    },
    {
        latitude: 32.068296,
        longitude: 118.788966
    }
]

Page({
    data: {
        polyline: [
            {
                points: pointsArr,
                color: '#ff0000',
                width: 1,
                borderColor: '#ff0000',
                borderWidth: 1
            }
        ],
        markers: [
            {
                id: 1,
                latitude: pointsArr[0].latitude,
                longitude: pointsArr[0].longitude,
                height: '30rpx',
                iconPath: '../../static/images/location.png',
                callout: {
                    content: '起点',
                    display: 'ALWAYS',
                    fontSize: 13,
                    bgColor: '#ffffff',
                    borderRadius: 10,
                    padding: 9
                }
            },
            {
                id: 2,
                latitude: pointsArr[pointsArr.length - 1].latitude,
                longitude: pointsArr[pointsArr.length - 1].longitude,
                height: '30rpx',
                iconPath: '../../static/images/location.png',
                callout: {
                    content: '终点',
                    display: 'ALWAYS',
                    fontSize: 13,
                    bgColor: '#ffffff',
                    borderRadius: 10,
                    padding: 9
                }
            }
        ]
    },
    onLoad: function () {
        this.mapCtx = wx.createMapContext('map');
        this.mapCtx.includePoints({
            padding: [50, 10, 10, 10],
            points: pointsArr,
        });
    }
})