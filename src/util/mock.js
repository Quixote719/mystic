const knowledgeGraphData = [
    {
        modelId: 'f4dc5756d3ae4b9baa3e2d4a959c4fec',
        graphName: '20190712-104441-1',
        entityNum: '流量预测1',
        eventNum: '1.0',
        business: '交通',
        uploadTime: 1564034859346,
        enableStatus: false,
        document:
            '/awaken/train/model/warehouse/file/doc/20190712/104441-1/流量预测拆分简版.pdf',
        dagBackendId: 56,
        modelDescription:
            '提取预测前28天的卡口每小时过车数据，进行特征工程后输入机器学习回归算法中预测未来该卡口的流量。'
    },
    {
        modelId: '0254116e994f442aa65737fce6cdfac6',
        graphName: '20190731-100205-1',
        entityNum: '基于同住关系的涉黑嫌疑人模型',
        eventNum: '1.0',
        business: '公安',
        uploadTime: 1565767279469,
        enableStatus: true,
        document:
            '/awaken/train/model/warehouse/file/doc/20190731/100205-1/Verification.pdf',
        dagBackendId: 97,
        modelDescription:
            '使用关系数据，提取同住关系等特征，输入机器学习算法中进行涉黑嫌疑人预测。'
    },
    {
        modelId: 'a574ed48a85841bc94c7176d6b6f655d',
        graphName: '20190722-160851-1',
        entityNum: '嫌疑人预测HZ',
        eventNum: '1.0',
        business: '公安',
        uploadTime: 1564050905675,
        enableStatus: true,
        document:
            '/awaken/train/model/warehouse/file/doc/20190722/160851-1/Verification.pdf',
        dagBackendId: 70,
        modelDescription:
            '使用属性特征、出行行为特征、关系特征，经过一系列特征处理，输入GBDT算法中进行嫌疑人预测。'
    },
    {
        modelId: 'd60f13e742f24b269387bf61cfc048c1',
        graphName: '20190719-153312-1',
        entityNum: 'DocStrange',
        eventNum: '1.4',
        business: '能源',
        uploadTime: 1565766856293,
        enableStatus: false,
        document:
            '/awaken/train/model/warehouse/file/doc/20190719/153312-1/blood.pdf',
        dagBackendId: 61,
        modelDescription: '123'
    },
    {
        modelId: '814b10c8ec2d4c0ba82c2ac85eafe7d8',
        graphName: '20190719-153611-1',
        entityNum: 'ash',
        eventNum: '3.2',
        business: '通用',
        uploadTime: 1565749904260,
        enableStatus: true,
        document:
            '/awaken/train/model/warehouse/file/doc/20190719/153611-1/ll.pdf',
        dagBackendId: 64,
        modelDescription: 'cs'
    },
    {
        modelId: '215e3eca2306491f9a519036a104329e',
        graphName: '20190731-095658-1',
        entityNum: '基于属性的涉毒嫌疑人模型',
        eventNum: '1.0',
        business: '公安',
        uploadTime: 1564538282832,
        enableStatus: true,
        document:
            '/awaken/train/model/warehouse/file/doc/20190731/095658-1/Verification.pdf',
        dagBackendId: 96,
        modelDescription:
            '使用属性数据，提取属性特征，输入机器学习算法中进行涉毒嫌疑人预测。'
    },
    {
        modelId: '57f0501d3a724810b50cdd713afafd76',
        graphName: '20190709-111450-1',
        entityNum: 'op',
        eventNum: 'v7',
        business: '文教卫',
        uploadTime: 1565766891708,
        enableStatus: false,
        document:
            '/awaken/train/model/warehouse/file/doc/20190709/111450-1/blood.pdf',
        dagBackendId: 38,
        modelDescription: '12'
    },
    {
        modelId: 'e52f3676666e4adab967c3f001926069',
        graphName: '20190731-095103-1',
        entityNum: '基于住宿行为的涉毒嫌疑人模型',
        eventNum: '1.0',
        business: '公安',
        uploadTime: 1564538300334,
        enableStatus: true,
        document:
            '/awaken/train/model/warehouse/file/doc/20190731/095103-1/Verification.pdf',
        dagBackendId: 94,
        modelDescription:
            '使用住宿行为数据，提取相关住宿特征，输入机器学习算法中进行涉毒嫌疑人预测。'
    },
    {
        modelId: 'dfc52c653d6c4b50ae95f68a69978ce6',
        graphName: '20190725-145023-1',
        entityNum: '舟山嫌疑人预测',
        eventNum: '1.0',
        business: '公安',
        uploadTime: 1564540246005,
        enableStatus: false,
        document:
            '/awaken/train/model/warehouse/file/doc/20190725/145023-1/Verification.pdf',
        dagBackendId: 91,
        modelDescription:
            '行业算法团队嫌疑人预测模型简版。主要使用了属性特征、住宿行为特征、出行（公交）行为特征。'
    },
    {
        modelId: '2f3d851a60a3453e93a29c52342b713b',
        graphName: '20190725-143301-1',
        entityNum: '信用卡消费分析',
        eventNum: '1.0',
        business: '金融',
        uploadTime: 1564036511433,
        enableStatus: false,
        document:
            '/awaken/train/model/warehouse/file/doc/20190725/143301-1/Verification.pdf',
        dagBackendId: 88,
        modelDescription: '基于信用卡消费数据，建立VIP客户画像。'
    }
]

export { knowledgeGraphData }
