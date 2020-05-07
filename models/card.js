const db = require('./conn.js');

class Card {
    constructor(id, character, pinyin, english){
        this.id = id;
        this.character = character;
        this.pinyin = pinyin;
        this.english = english;
    };

    static async getAllRadicals(){
        try{
            const response = await db.any(`select * from radicals`);
            return response;
        } catch(err){
            return err.message;
        }
    };

    static async getFiveRadicals(){
        try{
            const response = await db.any(`select * from radicals where id <= 5`);
            return response;
        } catch(err){
            return err.message;
        }
    };

    static async getTenRadicals(){
        try{
            const response = await db.any(`select * from radicals where id between 5 and 11`);
            return response;
        } catch(err){
            return err.message;
        }
    };

    static async getFifteenRadicals(){
        try{
            const response = await db.any(`select * from radicals where id between 10 and 16`);
            return response;
        } catch(err){
            return err.message;
        }
    };

};

module.exports = Card;